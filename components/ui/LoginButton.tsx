'use client'; // Asegura que este código solo se ejecute en el cliente

import { useEffect, useState } from 'react';

export default function LoginButton() {
  const [isClient, setIsClient] = useState(false);

  // Este useEffect asegura que el código se ejecute solo en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async () => {
    const res = await fetch('/auth/callback', { method: 'POST' });
    
    if (res.ok) {
      const data = await res.json();
      window.location.href = data.url;  // Redirige al flujo de OAuth
    } else {
      console.error('Error en la respuesta del servidor:', await res.text());
    }
  };

  // Evita que el código se ejecute en el servidor, sólo se renderiza si estamos en el cliente
  if (!isClient) {
    return null;  // No renderiza el botón en SSR
  }

  return (
    <button onClick={handleLogin} className="btn btn-primary">
      Iniciar sesión con Google
    </button>
  );
}
