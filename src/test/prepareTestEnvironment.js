const fs = require('fs')
const path = require('path')

const mainJsContent = fs.readFileSync(path.join(__dirname, '../main_.js'), 'utf8')
const modifiedContent = mainJsContent
  .replace(/\b(var|let|const)\b/g, 'global.') // Заміна var, let, const на global.
  .replace(/console\.log\(/g, '// console.log(')

export { modifiedContent as code }
