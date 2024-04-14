export const sendingMessage = async (req, res) => {
    try {

    } catch (error) {
        console.log("Error in Sending Message: ",error.message)
        res.status(500).json({error: "Internal Server Error"});
    }
}