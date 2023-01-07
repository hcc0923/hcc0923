const handleFormatType = (type: string) => {
    switch (type) {
        case 'zh':
            return '中文';
        case 'en':
            return 'English'
        default:
            break;
    }
}

const generateTree = (data: Array<{item: string, id: number}>) => {
    return data.map(item => item.id % 2 === 0);
}

const handleResolveTag = (tag: string) => {
    return tag === 'zh' ? '中文' : 'English';
}