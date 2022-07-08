const StyleDictionary = require('style-dictionary').extend('./style-dictionary/sd-config.json');

StyleDictionary.registerTransform({
    name: 'radii/px',
    type: 'value',
    matcher: function(token){
        return token.attributes.category === 'radii' && token.value != 0;
    },
    transformer: function(token){
        return `${token.value}px`;
    }
})

StyleDictionary.registerTransformGroup({
    name: "less",
    transforms: StyleDictionary.transformGroup["less"].concat(['radii/px'])
})
StyleDictionary.buildAllPlatforms();