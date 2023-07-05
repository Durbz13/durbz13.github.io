const square = document.querySelector('.black-square');
        let posX = 0;
        let posY = 0;

        function moveSquare(event) {
            const key = event.key;
            const squareSize = 50;
            
            switch (key) {
                case 'ArrowLeft':
                    posX -= 50;
                    break;
                case 'ArrowRight':
                    posX += 50;
                    break;
                case 'ArrowUp':
                    posY -= 50;
                    break;
                case 'ArrowDown':
                    posY += 50;
                    break;
                default:
                    return;
            }

            square.style.transform = `translate(${posX}px, ${posY}px)`;
        }

        document.addEventListener('keydown', moveSquare);