#!/usr/bin/env bun

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

interface BuildOptions {
  readonly svgPath: string;
  readonly componentPath: string;
  readonly componentName: string;
}

interface SVGContent {
  readonly raw: string;
  readonly cleaned: string;
}

interface BuildResult {
  readonly success: boolean;
  readonly message: string;
  readonly sourceFile: string;
  readonly targetFile: string;
}

function cleanSVGContent(svgContent: string): string {
  return svgContent
    .replace(/^<\?xml[^>]*>\s*/, '')
    .replace(/^<!DOCTYPE[^>]*>\s*/, '')
    .replace(/^<!--[^>]*-->\s*/, '')
    .replace(/\s+width="[^"]*"/g, '')  
    .replace(/\s+height="[^"]*"/g, '')
    .trim();
}

function generateSVGComponent(svgContent: string, componentName: string = 'Logo'): string {
  const cleanedSVG: string = cleanSVGContent(svgContent);

  return `---
// Componente SVG generado automáticamente
// No editar manualmente - usar: npm run build:svg:component
---

${cleanedSVG}`;
}

function readSVGFile(filePath: string): SVGContent {
  try {
    const rawContent: string = readFileSync(filePath, 'utf8');
    const cleanedContent: string = cleanSVGContent(rawContent);
    
    return {
      raw: rawContent,
      cleaned: cleanedContent
    };
  } catch (error) {
    throw new Error(`Error al leer archivo SVG: ${error instanceof Error ? error.message : 'Error desconocido'}`);
  }
}

function writeComponentFile(filePath: string, content: string): void {
  try {
    writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    throw new Error(`Error al escribir componente: ${error instanceof Error ? error.message : 'Error desconocido'}`);
  }
}

function buildSVGComponent(options: BuildOptions): BuildResult {
  const { svgPath, componentPath, componentName } = options;
  
  try {
    if (!svgPath || !componentPath) {
      throw new Error('Rutas de archivo no pueden estar vacías');
    }

    const svgContent: SVGContent = readSVGFile(svgPath);
    const componentContent: string = generateSVGComponent(svgContent.cleaned, componentName);
    
    writeComponentFile(componentPath, componentContent);
    
    return {
      success: true,
      message: '✅ Componente SVG generado exitosamente',
      sourceFile: svgPath,
      targetFile: componentPath
    };
    
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : 'Error desconocido';
    return {
      success: false,
      message: `❌ Error: ${errorMessage}`,
      sourceFile: svgPath,
      targetFile: componentPath
    };
  }
}

function getFilePaths(): BuildOptions {
  const __filename: string = fileURLToPath(import.meta.url);
  const __dirname: string = dirname(__filename);
  
  return {
    svgPath: join(__dirname, '../src/assets/k4n/K4N_dynamic.svg'),
    componentPath: join(__dirname, '../src/components/Logo.astro'),
    componentName: 'Logo'
  };
}

function main(): void {
  const options: BuildOptions = getFilePaths();
  const result: BuildResult = buildSVGComponent(options);
  
  console.log(result.message);
  console.log('📁 Archivo fuente:', result.sourceFile);
  console.log('📁 Componente generado:', result.targetFile);
  
  if (result.success) {
    console.log('💡 Usa: import Logo from "./components/Logo.astro"');
  } else {
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { 
  buildSVGComponent, 
  generateSVGComponent, 
  cleanSVGContent,
  type BuildOptions,
  type SVGContent,
  type BuildResult
};
