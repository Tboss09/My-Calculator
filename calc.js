const input = document.querySelector('input');
document.querySelectorAll('.num__key').forEach(el =>
    {
        el.onclick = () =>
        (input.value = 
            input.value !== '0' ? input.value +
            el.innerText : el.innerText);
    });

    const buffer = [];
    const callback = opname => () => {
        let currentval = parseFloat(input.value);

        if(opname === 'percent'){
            currentval *= 0.01;
            input.value = currentval;
        }
        else{
            if(buffer && buffer.length){
                buffer.push({value: currentval});

                const result = evaluate(buffer);

                buffer.push({value:result});
                buffer.push({value: opname});

                input.value = '';
            }
        }
    }

    const evaluate = buffer => {
        const secondoperand = buffer.pop().value;
        const operator = buffer.pop().value;
        const firstoperand = buffer.pop().value;

        switch (operator){
            case 'add':
            return firstoperand + secondoperand;
            break;
            case 'substract':
            return firstoperand - secondoperand;
            break;
            case 'multiply':
            return firstoperand * secondoperand;
            break;
            case 'divide':
            return firstoperand / secondoperand;
            break;
            default:
                return secondoperand;
        }
    }

    for(const opname of ['add', 'substract', 'multiply', 'divide', 'percent']){
        document.querySelector(`.op__key[op=${opname}]`)
        .onclick = opcallback(opname);
    }

    document.querySelector('.eq__key').onclick = 
    () => {
        if(buffer && buffer.length){
            buffer.push({value: parseFloat(input.value)});
            input.value = evaluate(buffer);
        }
    }

    document.querySelector('.op__key[op=clear]').onclick = () => {
        input.value = 0;
        buffer.length = 0;
    }

    document.querySelector('op__key[op=negate]').onclick = () => {
        
    }