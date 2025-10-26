/**
 * Node.js version configuration tests
 */

const fs = require('fs');
const path = require('path');

describe('Node.js version configuration', () => {
  const projectRoot = path.resolve(__dirname, '..');
  
  test('package.json should specify Node.js engine requirement', () => {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    expect(packageJson.engines).toBeDefined();
    expect(packageJson.engines.node).toBeDefined();
    expect(packageJson.engines.node).toMatch(/20/);
  });

  test('.nvmrc file should exist and specify version 20', () => {
    const nvmrcPath = path.join(projectRoot, '.nvmrc');
    expect(fs.existsSync(nvmrcPath)).toBe(true);
    
    const nvmrcContent = fs.readFileSync(nvmrcPath, 'utf8').trim();
    expect(nvmrcContent).toBe('20');
  });

  test('current Node.js version should meet the requirement', () => {
    const currentNodeVersion = process.version;
    const majorVersion = parseInt(currentNodeVersion.slice(1).split('.')[0], 10);
    
    expect(majorVersion).toBeGreaterThanOrEqual(20);
  });
});

