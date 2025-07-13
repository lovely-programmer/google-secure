"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [lang, setLang] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    setLang(lang);
    localStorage.setItem("lang", "English (United Kingdom)");
  });

  return (
    <div className="footer">
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option>Afrikaans</option>
        <option>Čeština</option>
        <option>Dansk</option>
        <option>Deutsch</option>
        <option>Ελληνικά</option>
        <option>English</option>
        <option>English (United Kingdom)</option>
        <option>Español (España)</option>
        <option>Español</option>
        <option>Suomi</option>
        <option>Français</option>
        <option>Bahasa Indonesia</option>
        <option>Italiano</option>
        <option>日本語</option>
        <option>한국어</option>
        <option>Bahasa Melayu</option>
        <option>Norsk</option>
        <option>Nederlands</option>
        <option>Polski</option>
        <option>Português (Brasil)</option>
        <option>Português (Portugal)</option>
        <option>Русский</option>
        <option>Svenska</option>
        <option>ภาษาไทย</option>
        <option>Filipino</option>
        <option>Türkçe</option>
        <option>中文(简体)</option>
        <option>中文(台灣)</option>
        <option>বাংলা</option>
        <option>ગુજરાતી</option>
        <option>हिन्दी</option>
        <option>Hrvatski</option>
        <option>Magyar</option>
        <option>ಕನ್ನಡ</option>
        <option>മലയാളം</option>
        <option>मराठी</option>
        <option>नेपाली</option>
        <option>ਪੰਜਾਬੀ</option>
        <option>සිංහල</option>
        <option>Slovenčina</option>
        <option>தமிழ்</option>
        <option>తెలుగు</option>
        <option>Tiếng Việt</option>
        <option>中文(香港)</option>
        <option>Български</option>
        <option>Français (Canada)</option>
        <option>Română</option>
        <option>Српски</option>
        <option>Українська</option>
      </select>
      <div className="links">
        <a href="">Help</a>
        <a href="">Privacy</a>
        <a href="">Terms</a>
      </div>
    </div>
  );
}
