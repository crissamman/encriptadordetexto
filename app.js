/* Reseteo de margenes y padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Fondo de pantalla */
  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #00c6ff, #0072ff);
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  /* Contenedor principal */
  .container {
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
    text-align: center;
  }
  
  /* Estilos para las secciones de entrada y salida */
  .input-section,
  .output-section {
    margin-bottom: 1.5rem;
  }
  
  /* Estilo para el textarea */
  .text-input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  
  /* Estilo para los botones */
  .action-button {
    background-color: #0072ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.2rem;
    transition: background-color 0.3s ease;
  }
  
  .action-button:hover {
    background-color: #005bb5;
  }
  
  /* Estilo para el texto de salida */
  .text-output {
    background-color: #f0f0f0;
    padding: 0.5rem;
    border-radius: 5px;
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Logo */
  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .logo-container img {
    max-width: 100px;
  }
  