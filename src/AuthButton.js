import React from "react";

const AuthButton = ({ clientId, host, redirectURI }) => {
  if (redirectURI === undefined) {
    redirectURI = window.location.href;
  }

  const log = (message, level) => {
    console.log(level + " [" + new Date().toISOString() + "] - " + message);
  };

  const authorize = (clientId, redirectURI, host) => {
    const responseTypeParam = "response_type=code";
    const clientIdParam = "client_id=" + clientId;
    const redirectURIParam = "redirect_uri=" + redirectURI;
    const endpoint = "/api/authorize";
    const state = "state=" + "init";
    const scope = "scope=" + "init";

    const url =
      "http://" +
      host +
      endpoint +
      "?" +
      responseTypeParam +
      "&" +
      clientIdParam +
      "&" +
      redirectURIParam +
      "&" +
      state;
    "&" + scope;

    log("authsec", "INFO");
    window.location.href = url;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => authorize(clientId, redirectURI, host)}
      >
        Authorize
      </button>
    </>
  );
};

export default AuthButton;
