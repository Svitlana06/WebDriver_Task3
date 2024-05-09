let data = {
    'Number of instances': '4',
    'What are these instances for?': 'leave blank',
    'Operating System / Software': 'Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)',
    'Provisioning model': 'Regular',
    'Machine Family': 'General Purpose',
    'Series': 'N1',
    'Machine type': 'n1-standard-8, vCPUs: 8, RAM: 30 GB',
    'Add GPUs': "true",
    'GPU type': 'NVIDIA Tesla V100',
    'Number of GPUs': '1',
    'Local SSD': '2x375 GB',
    'Datacenter location': 'Frankfurt (europe-west3)',
    'Committed usage': '1 year'
}

describe('Google Cloud Platform Pricing Calculator', () => {

    before(async () => {
        await browser.url('https://cloud.google.com/');
    })

    it('Searching of the calculator', async () => {
        try {
            await $('.ND91id').click();
            await browser.pause(700);
            await $('#i4').setValue('Google Cloud Platform Pricing Calculator');
            await browser.keys("\uE007");
            await $('.K5hUy').click();
            await browser.pause(700);
        }

        catch (err) {
            console.error(err);
        }
    })

    it('Creating a new calculator for compute engine', async () => {
        try {
            await $('.UywwFc-LgbsSe').click();
            await browser.pause(700);
            await $('.aHij0b-WsjYwc').click();
        }

        catch (err) {
            console.error(err);
        }
    })

    it('Filling out the form with data', async () => {
        try {
            for (i = 0; i <= Number(data["Number of instances"]); i++) {
                await $$('.wX4xVc-Bz112c-LgbsSe')[1].click(); // number of Instances
                i++;
            }
        }

        catch (err) {
            console.error(err);
        }


        try {

            if (await $$('.VfPpkd-uusGie-fmcmS')[3].getText() !== data["Operating System / Software"]) {
                await $$('.VfPpkd-O1htCb-OWXEXe-SfQLQb-M1Soyc-Bz112c')[1].click(); // checking the current value of an operation system and choosing the correct one
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[9].click();
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err)
        }

        try {
            await $$('.oLWDHd')[0].click(); // regular
            await browser.pause(700);
        }

        catch (err) {
            console.error(err);
        }

        try {
            if (await $$('.VfPpkd-uusGie-fmcmS')[4].getText() !== data["Machine Family"]) {
                await $$('.VfPpkd-O1htCb-OWXEXe-ztc6md')[1].click();
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')[0].click(); // checking the current value of a machine family and choosing the correct one 
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err);
        }

        try {
            if (await $$('.VfPpkd-uusGie-fmcmS')[5].getText() !== data["Series"]) {
                await $$('.VfPpkd-O1htCb-OWXEXe-INsAgc')[4].click();
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')[4].click(); // checking the current value of series and choosing the correct one 
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err);
        }

        try {
            if (await $$('.VfPpkd-uusGie-fmcmS-haAclf')[6].getText() !== data["Machine type"]) {
                await $$('.VfPpkd-O1htCb-OWXEXe-ztc6md')[3].click();
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')[18].click(); // checking the current value of a machine type and choosing the correct one 
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err);
        }

        try {
            await $$('.eBlXUe-scr2fc-OWXEXe-uqeOfd')[4].click(); // adding GPUs
            await browser.pause(1000);
        }

        catch (err) {
            console.error(err);
        }

        try {
            if (await $$('.VfPpkd-uusGie-fmcmS')[7].getText() !== data["GPU type"]) {
                await $$('.VfPpkd-TkwUic')[7].click();
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[22].click(); // checking the current value of a GPU type and choosing the correct one
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err);
        }

        try {
            if (await $$('.VfPpkd-uusGie-fmcmS')[8].getText() !== data["Number of GPUs"]) {
                await $$('.VfPpkd-TkwUic')[8].click();
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[24].click(); // checking the current value of a number of GPUs and choosing the correct one 
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err);
        }

        try {
            if (await $$('.VfPpkd-uusGie-fmcmS')[9].getText() !== data["Local SSD"]) { // checking the current value of a local SSD and choosing the correct one 
                await $$('.VfPpkd-TkwUic')[9].click();
                await $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[30].click();
                await browser.pause(700);
            }
        }

        catch (err) {
            console.error(err);
        }

        try {
            await $$('.oLWDHd')[8].click();
        }

        catch (err) {
            console.error(err);
        }

        await browser.pause(1200);

        // items are not available on the website:
        // 1.  What are these instances for?: leave blank
        // 2. Datacenter location: Frankfurt (europe-west3)
    })
    it('Checking price and creating a report', async () => {

        try {
            let priceInMonth = await $$('.MyvX5d')[1];
            let estimatedCost = await $('.gt0C8e')  // checking a price
            let estimatedCostText = await estimatedCost.getText();
            await expect(priceInMonth).toHaveText(estimatedCostText);
            await browser.pause(700);
        }

        catch (err) {
            console.error(err);
        }

        try {
            await $('.AXySwf').click();
            await browser.pause(700);

            await $('.jl2ntd').click();
            await browser.pause(700);

            let expectedUrl = await $('.jl2ntd').getAttribute("href");
            await browser.pause(700);

            await browser.switchWindow(expectedUrl);  // Opening a report
            await browser.pause(700);
        }

        catch (err) {
            console.error(err);
        }
    
    })

it('Сhecking the report', async () => {

    try {
        let numberOfInstancesReport = await $('span=Number of Instances').nextElement();
        await expect(numberOfInstancesReport).toHaveText(data["Number of instances"]);

        let operationSystemReport = await $('span=Operating System / Software').nextElement();
        await expect(operationSystemReport).toHaveText(data["Operating System / Software"]);

        let provisioningModelReport = await $('span=Provisioning Model').nextElement();
        await expect(provisioningModelReport).toHaveText(data["Provisioning model"]);

        let addGPUsReport = await $('span=Add GPUs').nextElement();
        await expect(addGPUsReport).toHaveText(data["Add GPUs"]);

        let numberOfGPUsReport = await $('span=Number of GPUs').nextElement();
        await expect(numberOfGPUsReport).toHaveText(data["Number of GPUs"]);

        let machineTypeReport = await $('span=Machine type').nextElement();
        await expect(machineTypeReport).toHaveText(data["Machine type"]);

        let localSSDReport = await $('span=Local SSD').nextElement();
        await expect(localSSDReport).toHaveText(data["Local SSD"]);

        let committedUsageReport = await $('span=Committed use discount options').nextElement();
        await expect(committedUsageReport).toHaveText(data["Committed usage"]);
    }

    catch (err) {
        console.error(err);
    }

})


})