import fs from 'fs'

const generateRobotsTxt = () => {
  const environment = process.env.NODE_ENV
  let content = 'User-agent: *\n'

  if (environment === 'production') {
    // Tillåter alla sidor
    content = 'User-agent: *\n'
  } else {
    // Blockerar alla sidor i utvecklingsmiljön
    content += 'Disallow: *\n'
  }

  fs.writeFileSync('./public/robots.txt', content)
}

generateRobotsTxt()

// "generate-robots": "babel-node ./src/sitemap/sitemap-generator.js"
