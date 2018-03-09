module.exports = app => {
    app.get(
        '/api/post',
        (request, response) => {
            const post = {
                title: 'Magento 2.x add cms block programmatically',
                date: '22.11.2017',
                content: 'Here should be post content'
            };

            response.send(post);
        }
    );

};
