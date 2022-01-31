module.exports = {
    newComponent: {
        componentsPath: 'src',
        templatesPath: 'src/wcs-component-templates',
    },
    componentsDiscovery: {
        include: ['src/**'],
    },
    simulationGlobalSetup: './src/boards-global-setup.ts',
    scripts: {
        install: {
            title: 'Install',
            description: 'Run install',
            command: 'npm i',
            trigger: ['checkout', 'pull', 'setup'],
        },
    },
};
