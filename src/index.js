const puppeteer = require('puppeteer')

async function main() {
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()
  await page.goto('https://mattlittleson.github.io/puppeteo/')
  await page.screenshot({ path: 'before.png' })

  const button = await page.$('#button')
  if (button) {
    await button.click()
  }

  await page.screenshot({ path: 'after.png' })

  await browser.close()
}

main()
