import Transaction from "./../model/Transaction.js";
import { responder } from "../util.js";
import { application } from "express";


//post/ transaction
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

//get/ transation
const getApiTransactions =  async (req, res) => {
    const allTransaction = await Transaction.find();
  
    return responder({
        res,
        success: true,
        message: 'Successfully fetched all transaction',
        data: allTransaction

    })
  }

  //put/ transaction
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

  //delete / transaction
  const deleteApiTrasaction = async (req, res) => {
    const { id } = req.params;

    await Transaction.deleteOne({_id: id});

     return responder({
          res,
          success: true,
          data: {
              id: id
          },
          message: `Successfully deleted transaction with id ${id}`,
          
     })
  }

  //get/transaction/user/:id
   const getApiTransactionsUserId = async (req, res) => {
     const {id} = req.params;

     const transaction = await Transaction.find({user: id}).populate('transaction user');

     return responder({
          res,
          success: true,
          data: {
            id: id  
                  
          },
          message: "Transaction fetched successfully"
     });
   }

export { postApiTransaction , getApiTransactions , putApiTransaction , deleteApiTrasaction , getApiTransactionsUserId };