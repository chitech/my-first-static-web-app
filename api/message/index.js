module.exports = async function (context, req) {
    context.res.json ({
        text: "Hello message from the API!"
    });
}