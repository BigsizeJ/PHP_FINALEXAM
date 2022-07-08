const Effect = (() => {
    const activeButton = (element) => {
        const buttons = document.querySelectorAll('.switch')

        Array.from(buttons).forEach((button) => {
            button.classList.remove('active')
        })
        element.classList.add('active')

    }
    
    const Fulltime = () => {
        const form = document.querySelector('.form')
        form.textContent = ''      

        const inputDiv = document.createElement('div')
        
        const fullname = document.createElement('input')
        fullname.type = 'text'
        fullname.name = 'fullname'
        fullname.required = true

        const salary = document.createElement('input')
        salary.type = 'number'
        salary.name = 'salary'
        salary.required = true
        
        const submit = document.createElement('input')
        submit.type = 'submit'
        submit.name = 'fsubmit'
        submit.className = 'submit'
        submit.value = 'EVALUATE'

        const labelName = document.createElement('label')
        const labelSalary = document.createElement('label')

        
        labelName.innerText = 'FULLNAME'
        labelSalary.innerText = 'BASIC SALARY'

        labelName.appendChild(fullname)
        labelSalary.appendChild(salary)
        inputDiv.appendChild(labelName)
        inputDiv.appendChild(labelSalary)
        form.appendChild(inputDiv)
        form.appendChild(submit)
    }

    const Parttime = () => {
        const form = document.querySelector('.form')
        form.textContent = ''      

        const inputDiv = document.createElement('div')
        
        const fullname = document.createElement('input')
        fullname.type = 'text'
        fullname.name = 'fullname'
        fullname.required = true

        const rate = document.createElement('input')
        rate.type = 'number'
        rate.name = 'rate'
        rate.required = true

        const hour = document.createElement('input')
        hour.type = 'number'
        hour.name = 'hour'
        hour.required = true

        const overtime = document.createElement('input')
        overtime.type = 'number'
        overtime.name = 'overtime'
        overtime.required = true

        const submit = document.createElement('input')
        submit.type = 'submit'
        submit.name = 'psubmit'
        submit.className = 'submit'
        submit.value = 'EVALUATE'

        const labelName = document.createElement('label')
        const labelRate = document.createElement('label')
        const labelHour = document.createElement('label')
        const labelOT = document.createElement('label')

        labelName.innerText = 'FULLNAME'
        labelRate.innerText = 'RATE PER HOUR'
        labelHour.innerText = 'NUMBER OF HOURS WORKED'
        labelOT.innerText = 'NUMBER OF HOURS OVERTIME'

        labelName.appendChild(fullname)
        labelRate.appendChild(rate)
        labelHour.appendChild(hour)
        labelOT.appendChild(overtime)

        inputDiv.appendChild(labelName)
        inputDiv.appendChild(labelRate)
        inputDiv.appendChild(labelHour)
        inputDiv.appendChild(labelOT)

        form.appendChild(inputDiv)
        form.appendChild(submit)
    }

    const loadfirst = () => {
        const fulltime = document.querySelector('.full')
        activeButton(fulltime)
        Fulltime()
    }

    const button = () => {
        const fulltime = document.querySelector('.full')
        const parttime = document.querySelector('.part')

        fulltime.addEventListener('click', () => {
            activeButton(fulltime)
            Fulltime()
        })

        parttime.addEventListener('click', () => {
            activeButton(parttime)
            Parttime()
        })
    }

    const close = () => {
        const close = document.querySelector('.close')
        const modal = document.querySelector('.modal')

        close.addEventListener('click', () => {
            modal.remove()
        })
    }

    button ()
    loadfirst()
    close()
})()

console.log('Hello')