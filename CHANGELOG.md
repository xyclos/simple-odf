# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [0.3.0](https://github.com/connium/simple-odf/compare/v0.2.0...v0.3.0) (2018-xx-xx)

### Added
* **list:** add sub lists


## [0.2.0](https://github.com/connium/simple-odf/compare/v0.1.0...v0.2.0) (2018-01-12)

### Added
* **doc:** add badges for dependency check, known vulnerabilities and npm version to README
* **list:** add basic list support
* **paragraph:** replace existing text
* **test:** add integration test

### Changed
* **doc:** improve package description, extend README
* **heading:** rename "headline" to "heading"
* **heading, paragraph:** export all API from main index.ts and remove namespace exports
* **paragraph:** use "text" instead of "text content"
* **style:** get horizontal alignment


## 0.1.0 (2018-01-08)

### Added
* **heading:** add headings to a document and modify their outline level
* **paragraph:** add paragraphs to a document and modify their text content
* **paragraph:** set page break before paragraph
* **paragraph:** set horizontal alignment
* **text-document:** create text documents and save them as flat XML ODF document
