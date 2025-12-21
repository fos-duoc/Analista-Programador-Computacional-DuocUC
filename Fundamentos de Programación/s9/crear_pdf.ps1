# Script para crear PDF del guion

# Leer el contenido del archivo TXT
$contenido = Get-Content "GUION_VIDEO_ETF_S9.txt" -Raw

# Crear objeto Word
$word = New-Object -ComObject Word.Application
$word.Visible = $false

# Crear nuevo documento
$doc = $word.Documents.Add()

# Configurar fuente monoespaciada
$selection = $word.Selection
$selection.Font.Name = "Courier New"
$selection.Font.Size = 10

# Insertar contenido
$selection.TypeText($contenido)

# Guardar como PDF
$pdfPath = "$PWD\GUION_VIDEO_ETF_S9.pdf"
$doc.SaveAs([ref]$pdfPath, [ref]17) # 17 = formato PDF

# Cerrar documento y Word
$doc.Close()
$word.Quit()

Write-Host "PDF creado exitosamente en: $pdfPath"
