/**
 * Created by jaelomin on 15. 2. 3..
 */
module.exports = function(grunt) {

    // 프로젝트 환경설정.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        
    });

    // "uglify" task를 지원하는 플러그인 로드.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};