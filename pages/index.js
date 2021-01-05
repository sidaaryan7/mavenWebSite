import React, { useState, useEffect } from "react";

import Header from "../components/Layout/Header/Header";
import SplashScreen from "../components/SplashScreen/index";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <>{loading ? <SplashScreen /> : <Header />}</>;
}
