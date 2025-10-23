
type SomeType = {
    a:number
    b:number
}

function someFunc(c:SomeType):number {
    return c.a + c.b
}

const obj = {
    a:6,
    b:9,
    o:0
}

someFunc(obj)

function process(val: unknown) {
    if (
        typeof val === 'object' && 
        !!val && 
        'log' in val && 
        typeof val.log === 'function'
    ) {
        val.log();
    }
}

const val = {
    log:''
}

process(undefined)

