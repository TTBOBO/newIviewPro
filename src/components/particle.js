class DrawParticle{
    constructor(obj = {}){
        this.obj = obj;
        this.canvas = obj.el;
        this.ctx = this.canvas.getContext('2d');

        this.width = obj.el.clientWidth;
        this.height = obj.el.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;



        this.mouseX = -1;
        this.mouseY = -1;
        this.ponitArr = [];  // 点的数组

        this.zoom = this.getZoom();

        this.initSCreen();  //初始化画布大小
    }

    initSCreen(){
        console.log(this.obj)
        let num = this.obj.number || 200;
        for(var i = 0; i < num; i++){
            this.ponitArr.push(this.creatPoint())
        }

        // 开始绘制线条点
        this.ctx.fillStyle = "#fff";
        this.ctx.strokeStyle = "#fff";
        this.ctx.lineWidth = 1 * this.zoom;
        this.ctx.fillRect(0,0,this.width,this.height);
        this.drawCanvas(this.ctx);
        //修改鼠标
        this.canvas.addEventListener('mouseover',(e) => {
            e = e || event;
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
        })
    }

    drawCanvas(ctx){
        ctx.clearRect(0,0,this.width,this.height);
        this.ponitArr.forEach((item,index) => {
            ctx.beginPath();
            item.x += this.xsKew;
            item.y += this.ysKew;
             //处理边缘碰撞
            //  if (item.x <= item.r || item.x >= this.width - item.r) {
            //     this.xsKew = -this.xsKew;
            //     item.x = item.x + this.xsKew;
            // }
            // if (item.y <= item.r || item.y >= this.height - item.r) {
            //     item.ysKew = -item.ysKew;
            //     item.y = item.y + item.ysKew;
            // }
            console.log(item.x,item.y,item.r)
            ctx.arc(item.x,item.y,item.r,0,2 * Math.PI);

            ctx.fill();
        })
    }

    creatPoint(){
        let xsKew = (Math.random() - 0.5) * this.zoom;  //偏移量
        let ysKew = (Math.random() - 0.5) * this.zoom;

        let r = ~~(Math.random() * 5 * this.zoom);
        let x = ~~(Math.random() * (this.width - r)) + 2 * r;  //x轴位置
        let y = ~~(Math.random() * (this.height - r)) + 2 * r;  //y轴位置
        return {
            x,y,r,xsKew,ysKew
        }
    }

    getZoom(){
        return window.innerWidth / window.screen.width;
    }
}

export default DrawParticle;