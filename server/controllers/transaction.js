import Transaction from "./../model/Transaction.js";
import { responder } from "../util.js";

const postApiTransaction = async (req, res) => {
    const {amount, type, category, description} = req.body;

    const transaction = new Transaction({
       amount,
       type,
       category,
       description
    });

    try{
      const savedTransaction = await transaction.save();

      return responder ({ 
        res, 
        success: true,
        message: 'Transaction saved',
        data: savedTransaction
    })
    } catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
      }
}

const getApiTransactions =  async (req, res) => {
    const allTransaction = await Transaction.find();
  
    return responder({
        res,
        success: true,
        message: 'Successfully fetched all transaction',
        data: allTransaction

    })
  }

  const putApiTransaction = async (req, res) => {
    const {id} = req.params;

    const {amount, type, category, description} = req.body;

    await Transaction.updateOne({_id: id}, {$set : {
       amount: amount,
       type: type,
       category: category,
       description: description,
    }});

    const updatedTrasaction = await Transaction.findById(id);

    return responder({
        res,
        success: true,
        data: updatedTrasaction,
        message: "Transaction update successfully"
    });
  }


export { postApiTransaction, getApiTransactions, putApiTransaction };