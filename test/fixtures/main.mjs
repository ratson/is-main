import isMain from '../..'

if (isMain(import.meta)) {
  console.log('is main')
}
