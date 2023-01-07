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