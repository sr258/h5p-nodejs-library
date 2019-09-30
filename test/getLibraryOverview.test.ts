import path from 'path';
import FileLibraryStorage from '../src/FileLibraryStorage';
import H5PEditor from '../src/H5PEditor';
import LibraryManager from '../src/LibraryManager';

describe('getting overview about multiple libraries', () => {
    it('returns basic information about single library', () => {
        return new H5PEditor(
            {},
            null,
            null,
            new FileLibraryStorage(path.resolve('test/data/libraries')),
            null,
            null,
            null
        )
            .getLibraryOverview(['H5P.Example1 1.1'])
            .then(libraries =>
                expect(libraries).toEqual([
                    {
                        uberName: 'H5P.Example1 1.1',
                        name: 'H5P.Example1',
                        majorVersion: 1,
                        minorVersion: 1,
                        tutorialUrl: '',
                        title: 'Example 1',
                        runnable: 1,
                        restricted: false,
                        metadataSettings: null
                    }
                ])
            );
    });

    it('return information about multiple libraries', () => {
        return new H5PEditor(
            {},
            null,
            null,
            new FileLibraryStorage(path.resolve('test/data/libraries')),
            null,
            null,
            null
        )
            .getLibraryOverview(['H5P.Example1 1.1', 'H5P.Example3 2.1'])

            .then(libraries => {
                expect(libraries.map(l => l.uberName)).toEqual([
                    'H5P.Example1 1.1',
                    'H5P.Example3 2.1'
                ]);
            });
    });
});