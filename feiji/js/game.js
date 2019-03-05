function Plane({direction='down',type}){
	this.ele = document.createElement('div');

	this.direction = direction;
	this.hp = 100;

	//当前敌机所在gameEngine.enemys对象中的id
	this.id = parseInt(Math.random()*100000) + "";
}

Plane.prototype = {
	move(x,y){
		this.ele.style.left = x + 'px';
		this.ele.style.top = y + 'px';
	},
	hurt(val){
		this.hp -= val;

		if(this.hp<=0){
			this.die();
		}
	},
	die(){
		clearInterval(this.timer);

		if(this.dieImgs.length>0){
			var idx = 0;
			this.dieTimer = setInterval(()=>{
			
				if (idx >= this.dieImgs.length) {
					clearInterval(this.dieTimer); //关闭定时器
					this.remove();
					// delete gameEngine.enemys[this.id]; //将当前的敌机对象从gameEngine.enemys对象中移除
				}else {
					this.ele.style.backgroundImage = "url(" + this.dieImgs[idx++] + ")";
				}
			}, 50);
		}
	},
	remove(){
		this.ele.parentNode.removeChild(this.ele); 
	}
}