class Draw {
    constructor(obj = {}){
        /**
         * speed =>  速度
         * color => 颜色
         * size => 大小
         * lineWidth => 线宽
         * location => 圆心位置
         * text => 文字
         * value => 圆环滚动的值，百分百
         */
        this.obj = obj;

        this.canvas = obj.el;
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.speed = obj.speed || 0.1;
        this.color = obj.color || "#ffeedd";
        this.size = Math.ceil((obj.size || 80) * (this.canvas.width / 180));
        this.lineWidth = obj.lineWidth || 10;
        this.location = obj.location || {x:this.canvas.width / 2,y:this.canvas.height / 2};
        this.text = obj.text || "";
        this.value = obj.value || 0;
        // 这里是圆的终点减去圆的起点
        this.degree = Math.PI * 1.5 / 100;
        this.animate = this.initAnimate.bind(this);
        this.tol = 0;
        this.sAngle = obj.sAngle || 0.75;
        this.initAnimate();
    }

    initAnimate(){
        
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.drawBg();  //画背景
        this.deawCirckeLay();  //画进度条
        this.drawCenterCir();  //内圈
        this.centerlineCir(); 
        this.drawText(this.tol);
        this.textName();
        if(this.tol < this.value) {
            window.requestAnimationFrame(this.animate);
            this.tol += this.speed;
        }else if(this.value < this.tol){
            window.requestAnimationFrame(this.animate);
            this.tol -= this.speed; 
        }
    }

    drawBg(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.obj.drawBgColor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = "round";
        this.ctx.arc(this.location.x,this.location.y,this.size,Math.PI * this.sAngle, Math.PI *2.25,false);
        this.ctx.stroke();
    }

    deawCirckeLay(){
        if(!this.value)
            return;
        this.ctx.beginPath();
        var gradient = this.ctx.createLinearGradient(0,this.linearLocation().start,0,this.linearLocation().end);
        gradient.addColorStop(0,this.obj.deawCirckeColor[0]);
        gradient.addColorStop(1,this.obj.deawCirckeColor[1]);
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineeCap = "round";
        this.ctx.arc(this.location.x,this.location.y,this.size,Math.PI * 0.75, Math.PI *0.75 + this.tol * this.degree,false);
        this.ctx.stroke();
    }

    drawCenterCir(){
        this.ctx.beginPath();
        var gradient = this.ctx.createLinearGradient(0,this.linearLocation().start,0,this.linearLocation().end);
        gradient.addColorStop(0,this.obj.drawCenterColor[0]);
        gradient.addColorStop(1,this.obj.drawCenterColor[0]);
        this.ctx.fillStyle = gradient;
        this.ctx.arc(this.location.x,this.location.y,this.size - 15,0,Math.PI*2,false);
        this.ctx.fill();
    }
    

    centerlineCir(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "rgba(0,0,0,0.3)";
        this.ctx.lineWidth = 10;
        this.ctx.arc(this.location.x,this.location.y,this.size - 20,0,Math.PI*2,false);
        this.ctx.stroke();
    }

    drawText(percent){
        this.ctx.beginPath();
        this.ctx.font = `${this.size / 3}px Arial`;
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = this.obj.numberColor || "#fff";
        this.ctx.fillText(`${parseInt(percent)}%`,this.location.x,this.location.y);
        this.ctx.stroke();
    }

    textName(){
        this.ctx.beginPath();
        this.ctx.font = `${this.size / 6}px "Microsoft YaHei"`;
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(this.text,this.location.x, this.location.y*(3.7/3));
        this.ctx.stroke();
    }

    change(value){
        this.value = value;
       
        if(value < 0 || value > 100){
            return false;
        }
        if(this.tol < this.value) {
            window.requestAnimationFrame(this.animate);
        }else{
            window.requestAnimationFrame(this.animate);
        }
    }

    linearLocation(){
        let start = this.location.y - ((this.size - 15)*2 + this.lineWidth) / 2;
        let end = start + (this.size - 15) *2 + this.lineWidth;
        return {start,end};
    }
}

export default Draw;