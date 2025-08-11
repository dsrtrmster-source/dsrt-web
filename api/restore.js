<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>DSRT Restore Tools</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>DSRT Restore Platform</h1>
    <div id="modeToggle">
      <button id="btnManual" class="active">Manual Tools</button>
      <button id="btnAI">AI Restore</button>
    </div>
  </header>

  <main>
    <section class="toolbar" id="toolbar">
      <!-- Manual tools buttons -->
      <button id="uploadBtn">Upload Foto</button>
      <button id="rotateBtn">Rotate 90°</button>
      <button id="cropBtn">Crop</button>
      <button id="brushBtn">Brush</button>
      <button id="filterBtn">Filter Grayscale</button>

      <!-- AI tools dropdown -->
      <div class="dropdown" id="aiDropdown" style="display:none;">
        <button class="dropbtn">AI Restore Features ▼</button>
        <div class="dropdown-content" id="aiFeaturesDropdown">
          <a href="#" data-feature="denoise">Denoise</a>
          <a href="#" data-feature="colorize">Colorize</a>
          <a href="#" data-feature="face-enhance">Face Enhance</a>
          <a href="#" data-feature="scratch-removal">Scratch Removal</a>
          <a href="#" data-feature="deblur">Deblur</a>
          <a href="#" data-feature="background-restore">Background Restore</a>
          <a href="#" data-feature="auto-contrast">Auto Contrast</a>
          <a href="#" data-feature="auto-brightness">Auto Brightness</a>
          <a href="#" id="upscaleMenu">Upscale ▶</a>
          <div class="nested-dropdown" id="upscaleDropdown" style="display:none;">
            <a href="#" data-upscale="2x">2x</a>
            <a href="#" data-upscale="4x">4x</a>
            <a href="#" data-upscale="6x">6x</a>
            <a href="#" data-upscale="8x">8x</a>
            <a href="#" data-upscale="face-aware">Face-Aware</a>
            <label><input type="checkbox" id="preserveTexture" /> Preserve Texture</label>
            <label><input type="checkbox" id="noiseReduction" /> Noise Reduction</label>
          </div>
        </div>
      </div>
    </section>

    <section id="canvasSection">
      <canvas id="editorCanvas" width="900" height="500"></canvas>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
