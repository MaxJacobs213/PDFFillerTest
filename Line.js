class Line
{
    constructor(parent, lines, colors)
    {
        this.parent = parent;
        this.linesCount = lines.length;
        this.width = '100%';
        this.height = 'calc(100vh / ' + this.linesCount + ')';
        this.display = 'flex';
        this.colors = colors;
    }

    drawLines(lines)
    {
        for (let i = 0; i < this.linesCount; i++)
        {
            let line = document.createElement('div');
            line.style.background = lines[i].background;
            line.style.width = this.width;
            line.style.height = this.height;
            line.style.display = this.display;

            this.parent.appendChild(line);
            this.drawElements(line, lines[i]);

            this.changeColor(this.colors, line, lines[i]);
        }
    }

    drawElements(line, currentLine)
    {
        for (let i = 0; i < currentLine.elements.length; i++)
        {
            let element = document.createElement('div');
            element.style.background = currentLine.elements[i].background;
            element.style.width = currentLine.elements[i].width + '%';
            element.style.height = '100%';

            line.appendChild(element);

            this.changeColor(this.colors, element, currentLine);
        }
    }

    changeColor(colors, element, currentLine)
    {
        setInterval(function () {
            let color = this.colors[Math.floor(Math.random() * this.colors.length)];
            element.style.background = color;
        }, currentLine.updateTime);
    }
}