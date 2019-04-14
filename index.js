let params = {
    lines : [
        {
            background : '#00F',
            updateTime : 1000,
            elements : [
                {
                    background: '#4eff03',
                    width : 25
                },
                {
                    background : '#ff1e9b',
                    width : 50
                },
                {
                    background : '#4183ff',
                    width : 25
                }
            ]
        },

        {
            background : '#000',
            updateTime : 1000,
            elements : [
                {
                    background: '#8ddf0c',
                    width : 50
                },
                {
                    background : '#ff857e',
                    width : 25
                },
                {
                    background : '#000',
                    width : 25
                }
            ]
        },

        {
            background : '#111',
            updateTime : 2000,
            elements : [
                {
                    background: '#000',
                    width : 50
                },
                {
                    background : '#edff1c',
                    width : 25
                },
                {
                    background : '#ff5b12',
                    width : 25
                }
            ]
        },

        {
            background : '#00F',
            updateTime : 3000,
            elements : [
                {
                    background: '#4dff03',
                    width : 25
                },
                {
                    background : '#fd1e9b',
                    width : 50
                },
                {
                    background : '#4d83ff',
                    width : 25
                }
            ]
        }
    ]
};

colors = ['blue', 'yellow', 'red', 'white', 'black', 'green', 'orange', 'purple', 'grey'];

let parent = document.getElementById('lines');

let obj = new Line(parent, params.lines);
obj.drawLines(params.lines);

