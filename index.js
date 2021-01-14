auth.onAuthStateChanged((user) => {
    if (user) {
     
        const income = document.querySelector('#income-form');
        income.addEventListener('submit', (e) => {
            e.preventDefault();
            db.collection('income').add({
                category: income['incomeDP'].value, //dropdown input
                memo: income['incomeMemo'].value,  //string input
                date: income['incomeDate'].value, //date
                amt: income['incomeAmt'].value, //number
                userUID:user.uid,
            }).then(() => {
                income.reset();
                location.reload();
                
            }).catch(e => {
                console.log(e);
            })

        }) 

        //------------------------------------------------------------
        const expense = document.querySelector('#expense-form');
        expense.addEventListener('submit', (e) => {
            e.preventDefault();
            db.collection('expense').add({
                category: expense['expenseDP'].value,
                memo: expense['expenseMemo'].value,
                date: expense['expenseDate'].value,
                amt: expense['expenseAmt'].value,
                userUID:user.uid,
            }).then(() => {
                expense.reset();
                location.reload();
                
            }).catch(e => {
                console.log(e);
            })
            
        }) 

        //--------------------------------------------------------

        const incomeTB=document.querySelector('.incomeTB');
        function rit(doc) {
            let html  = [
                `<tr id="type" class="center">${doc.data().category} </tr>
                <tr>${doc.data().memo}</tr>
                <tr id="date">${doc.data().date}</tr>
                <tr style="text-align: right" id="amount">${doc.data().amt}</tr>`

            ].join('');

            const span=document.createElement('span');
            span.innerHTML=html;
            incomeTB.appendChild(span);
        }

        db.collection('income').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
          rit(doc);
        });
        }).catch((e) => {
            console.log(e);

        })
//-----------------------------------------------------------------------------------
        function rit(doc) {
            let html  = [
                `<td id="type" class="center">${doc.data().category} </td>
                <td>${doc.data().memo}</td>
                <td id="date">${doc.data().date}</td>
                <td style="text-align: right" id="amount">${doc.data().amt}</td>`
            ].join('');

            const span=document.createElement('tr');
            span.innerHTML=html;
            incomeTB.appendChild(span);
        }

        db.collection('expense').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
          rit(doc);
        });
        }).catch((e) => {
            console.log(e);

        })

//----------------------------------------------------------------------------------------
    } else {
        console.log('no user logged in');
    }
});

const signOut = document.querySelector('#signOut');
signOut.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location='home.html';

    console.log('signOut user');
});

//---------------------------------------------------- 


