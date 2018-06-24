import { expect } from 'chai';
import {remoteToPage} from './../src/helpers';

describe('remoteToPage', () => {
    const testCases = [
        {
            name: "github",
            protocol: "ssh",
            remote: "git@github.com:Microsoft/vscode.git",
            page: "https://github.com/Microsoft/vscode"
        },
        {
            name: "bitbucket",
            protocol: "ssh",
            remote: 'git@bitbucket.org:rothenborg/fures-bad.git',
            page: 'https://bitbucket.org/rothenborg/fures-bad'
        },
        {
            name: "gitlab",
            protocol: "ssh",
            remote: 'git@gitlab.com:gitlab-examples/cross-project-java/java-frontend.git',
            page: 'https://gitlab.com/gitlab-examples/cross-project-java/java-frontend'
        },
        {
            name: "github",
            protocol: "https",
            remote: "https://github.com/Microsoft/vscode.git",
            page: "https://github.com/Microsoft/vscode"
        },
        {
            name: "bitbucket",
            protocol: "https",
            remote: 'https://RickMarker@bitbucket.org/rothenborg/fures-bad.git',
            page: 'https://bitbucket.org/rothenborg/fures-bad'
        },
        {
            name: "gitlab",
            protocol: "https",
            remote: 'https://gitlab.com/gitlab-examples/cross-project-java/java-frontend.git',
            page: 'https://gitlab.com/gitlab-examples/cross-project-java/java-frontend'
        }
    ]

    testCases.forEach(function(testCase) {
        it(`correctly finds correct page from ${testCase.name} with protocol "${testCase.protocol}"`, () => {
            const actualPage = remoteToPage(testCase.remote);

            expect(actualPage).equals(testCase.page);
        });
      });
});