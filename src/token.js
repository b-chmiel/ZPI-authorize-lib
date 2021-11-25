const getToken = (host, code, clientId) => {
  var xhr = new XMLHttpRequest();
  const url = host + "/api/token";
  const origin = window.location.origin;
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (document.getElementById("response") === undefined) {
      const responseField = document.createElement("div");
      responseField.setAttribute("id", "response");
      responseField.innerHTML = this.responseText;
      document.body.appendChild(responseField);
    }
  };

  xhr.send(
    JSON.stringify({
      grant_type: "authorization_code",
      redirect_uri: origin,
      client_id: clientId,
      code: code,
    })
  );

  return xhr.responseText;
};

export default getToken;
