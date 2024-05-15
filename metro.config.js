//metro.config.js

const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const { generate } = require('@storybook/react-native/scripts/generate');

generate({
    configPath: path.resolve(__dirname, './.ondevice'),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');


module.exports = withNativeWind(config, { input: './global.css' })