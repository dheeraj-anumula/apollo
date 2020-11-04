const scrollOnLoadMore = (numberOfBooks : number) : void => {
    if (numberOfBooks > 20) {
        location.hash = `${numberOfBooks - 10}`
    }
}

export default scrollOnLoadMore
