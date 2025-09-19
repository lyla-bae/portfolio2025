$(function() {
    $('.boxwaves').each(function (i, sel) {

        let currentScrollY = null;

        let gScaleX = 0;
        let gScaleY = 0;

        $(window).scroll(function(event) {
            if( !currentScrollY ) currentScrollY = this.scrollY;

            let absGap = Math.abs(this.scrollY - currentScrollY);

            let maxGap = 100; // 이 값으로 최대 왜곡 수치를 정할 수 있다.

            if( absGap > 1 && absGap < maxGap ) {
                let checkGap = this.scrollY - currentScrollY;
                gScaleX = checkGap*1; // 이 수치를 높이면 웅장해질것이다.(변경하면서 체크)
            }
            currentScrollY = this.scrollY; // tmp
        })

        let res_ratio = 1; // PC에서 보이는 비율
        /*if( window.devicePixelRatio > 2 ) {
            res_ratio = 0.5; // 모바일에서 보이는 비율
        }*/

        // box 사이즈등 정의
        let app = new PIXI.Application({
            width: 600,
            height: 726,
            backgroundColor: 0xFFFFFF,
            //resolution: window.devicePixelRatio || 1,
            resolution: res_ratio,
        });

        $(this)[0].append(app.view);

        app.stage.interactive = false;

        let container = new PIXI.Container();
        app.stage.addChild(container);

        let flag = PIXI.Sprite.from($(this).attr('src'));
        container.addChild(flag);
        flag.x = 0; // width값에 더한값을 줄것
        flag.y = 0; // height값에 더한값을 줄것

        //let displacementSprite = PIXI.Sprite.from('img/displacement_map_repeat.jpg'); // 효과파일
        let displacementSprite = PIXI.Sprite.from('img/noize.png'); // 효과파일
        //let displacementSprite = PIXI.Sprite.from('img/light.png'); // 효과파일
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        displacementFilter.padding = 10;

        displacementSprite.position = flag.position;

        app.stage.addChild(displacementSprite);

        flag.filters = [displacementFilter];

        // init set
        displacementFilter.scale.x = gScaleX;
        displacementFilter.scale.y = gScaleY;

        // 실시간 갱신(마우스를 스크롤하면 박스를 왜곡시킨다)
        setInterval(function() {

            if( Math.abs(gScaleX) > 0 ) {
                displacementFilter.scale.x = gScaleX;
                displacementFilter.scale.y = gScaleX; // add
                gScaleX = 0; // reset
            }
        }, 10);

        app.ticker.speed = 60; // 프레임 저하 속도(바꾸면서 체크)

        app.ticker.add(() => {
            displacementSprite.x++;
            if (displacementSprite.x > displacementSprite.width) {
                displacementSprite.x = 0;
            }

            if( displacementFilter.scale.x != 0 ) {
                if( displacementFilter.scale.x > 0 ) {
                    displacementFilter.scale.x--;
                } else {
                    displacementFilter.scale.x++;
                }
            }

            if( displacementFilter.scale.y != 0 ) {
                if( displacementFilter.scale.y > 0 ) {
                    displacementFilter.scale.y--;
                } else {
                    displacementFilter.scale.y++;
                }
            }
        });

    });
})