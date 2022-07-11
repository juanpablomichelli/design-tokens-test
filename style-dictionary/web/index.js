const StyleDictionary = require('style-dictionary')

module.exports = {
    transform: {
        'web/radius': require('./webRadius')
    },
    
    transformGroup: {
        'less' : StyleDictionary.transformGroup.less.concat(['web/radius'])
    }
}