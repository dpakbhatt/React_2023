import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const current = new Date();
  const duration = expirationDate.getTime() - current.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function redirectUser() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}
