export const setJwt = (token) => localStorage.setItem("jwt", token);
export const getJwt = () => localStorage.getItem("jwt");
export const removeJwt = () => localStorage.removeItem("jwt");

const INTERVAL_REFRESH_DEFAULT = 25000;

export const convertTimestampToMs = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const ms = date.getTime() - new Date().getTime();

  return ms;
};

export const getExpiration = () => {
  const jwt = getJwt();
  if (!jwt) {
    return INTERVAL_REFRESH_DEFAULT;
  }
  const getPayloadJwt = jwt.substring(
    jwt.indexOf(".") + 1,
    jwt.lastIndexOf(".")
  );

  const decodePayloadJwt = window.atob(getPayloadJwt);
  const parsePayload = JSON.parse(decodePayloadJwt);
  const expiration = convertTimestampToMs(parsePayload["exp"]);

  return expiration;
};

export const refreshJwt = () => {
  const timer = window.setInterval(() => {
    if (getJwt()) {
      removeJwt();
      document.location.reload();
    }
  }, getExpiration());

  if (!getJwt()) {
    clearInterval(timer);
  }

  return timer;
};
