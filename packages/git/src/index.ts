import { Logger } from '@hj/logger'

const logger: Logger = new Logger()

logger.log('abcdefg')
logger.info('abcdefg')
logger.warn('abcdefg')
logger.error('abcdefg')
console.log({name: 'whj', age: 12})