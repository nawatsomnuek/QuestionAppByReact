export const questions = {
    sample: [
        {
            title: 'ภูมิคุ้มกันของแต่ละบุคคลไม่เท่ากัน ไม่ขึ้นอยู่กับข้อใด',
            answer: [
                { title: 'พันธุกรรม     ', result: false },
                { title: 'ยาบางชนิด  ', result: false },
                { title: 'ภาวะโภชนาการ', result: true },
                { title: 'ไม่มีข้อถูก', result: false },
            ],
            seleted: -1
        },
        {
            title: 'เมื่อมีอหิวาตกโรคระบาด  นักเรียนจะถูกแนะนำให้ไปรับการฉีดวัคซีน  (Vaccine)',
            answer: [
                { title: 'แอนติบอดีที่อยู่ในเซรุ่ม', result: false },
                { title: 'อนติเจน  และแอนติบอดีที่อยู่ในเซรุ่ม', result: false },
                { title: 'เชื้อโรคที่ถูกทำให้อ่อนฤทธิ์หรือตายลงแล้ว', result: true },
                { title: 'สารพิษที่แบคทีเรียสร้างขึ้นและถูกทำให้หมดฤทธิ์แล้ว', result: false },
            ],
            seleted: -1
        },
        {
            title: 'สารแอนติบอดี   (Antibody)   ซึ่งสร้างโดยเม็ดเลือดขาว  จะมีการลำเลียงไปยังส่วนต่างของร่างกายโดย',
            answer: [
                { title: 'ระบบหมุนเวียนเลือด', result: true },
                { title: 'ระบบหมุนเวียนน้ำเหลือง', result: false },
                { title: 'ซึมผ่านเนื้อเยื่อต่าง ๆ', result: false },
                { title: 'ซึมผ่านไปกับของเหลวระหว่างเซลล์', result: false },
            ]
        },
        {
            title: 'ข้อความใดแสดงถึงการทำงานของระบบภูมิคุ้มกัน',
            answer: [
                { title: 'นิวรับประทานยาที่แพทย์สั่งจนครบ ', result: false },
                { title: 'ปิ๋มหายหวัดได้เองโดยไม่ต้องไปหาหมอ', result: true },
                { title: 'โบใช้แอลกอฮอล์เช็ดรอบปากแผลที่โดนมีดบาด', result: false },
                { title: 'ถูกทุกข้อ', result: false },
            ],
            seleted: -1
        },
        {
            title: 'แอนติเจน (antigen) คืออะไร',
            answer: [
                { title: 'โปรตีนที่อยู่บนผิวเซลล์ของเชื้อโรค', result: true },
                { title: 'สารที่เม็ดเลือดขาวสร้างขึ้นเพื่อกำจัดเชื้อโรค', result: false },
                { title: 'สารที่เชื้อโรคปล่อยออกมาเพื่อกำจัดเซลล์เม็ดเลือดขาว', result: false },
                { title: 'สารที่เกิดขึ้นหลังจากเซลล์เม็ดเลือดขาวกำจัดเชื้อโรคแล้ว', result: false },
            ],
            seleted: -1
        },
        {
            title: 'เซลล์บีและเซลล์ทีทำงานสัมพันธ์กันลักษณะใด',
            answer: [
                { title: 'เซลล์บีกระตุ้นเซลล์ทีให้ผลิตแอนติบอดี', result: false },
                { title: 'เซลล์ทีผู้ช่วยกระตุ้นให้เซลล์บีสร้างแอนติบอดี', result: true },
                { title: 'เซลล์บีสร้างแอนติบอดีเพื่อกระตุ้นการทำงานของเซลล์ที', result: false },
                { title: 'เซลล์ทีผู้ช่วยสร้างแอนติเจนกระตุ้นการทำงานของเซลล์บี', result: false },
            ],
            seleted: -1
        },
        {
            title: 'เซรุ่มคืออะไร',
            answer: [
                { title: 'แอนติเจนที่ได้จากม้า', result: false },
                { title: 'ทอกซอยด์ที่ได้จากม้า', result: false },
                { title: 'แอนติบอดีที่ได้จากกระต่าย', result: true },
                { title: 'เซลล์เม็ดเลือดขาวที่ได้จากกระต่าย', result: false },
            ],
            seleted: -1
        },
        {
            title: 'ร่างกายสามารถกำจัดเชื้อโรคหรือสารพิษที่นำมาทำเป็นวัคซีนได้เพราะอะไร',
            answer: [
                { title: 'เชื้อโรคในวัคซีนตายแล้ว', result: false },
                { title: 'เชื้อโรคในวัคซีนมีฤทธิ์อ่อนลงมาก', result: false },
                { title: 'สารพิษในวัคซีนหมดความเป็นพิษแล้ว', result: false },
                { title: 'ถูกทุกข้อ', result: true },
            ],
            seleted: -1
        },
        {
            title: 'หลักการทำงานของวัคซีนคืออะไร',
            answer: [
                { title: 'ใช้ทอกซินกระตุ้นการสร้างเซลล์ทีผู้ช่วย', result: false },
                { title: 'ใช้ทอกซินกระตุ้นการสร้างเซลล์พลาสมา', result: false },
                { title: 'ใช้เชื้อโรคที่แข็งแรงกระตุ้นการสร้างเซลล์เมมเมอรี', result: false },
                { title: 'ใช้เชื้อโรคที่ตายแล้วกระตุ้นการสร้างเซลล์เมมเมอรี', result: true },
            ],
            seleted: -1
        },
        {
            title: 'พิษซึ่งทาให้อ่อนลงแล้วฉีดเข้าสู่ร่างกายเพื่อกระตุ้น ให้ร่างกายสร้างแอนติบอดี คือ…….',
            answer: [
                { title: 'ซีรัม', result: false },
                { title: 'วัคซีน', result: false },
                { title: 'ทอกซอยด์', result: true },
                { title: 'ถูกทุกข้อ', result: false },
            ],
            seleted: -1
        },
        {
            title: 'อวัยวะใดต่อไปนี้ไม่เกี่ยวข้องกับระบบภูมิคุ้มกัน',
            answer: [
                { title: ' ม้าม (  Spleen )', result: false },
                { title: 'ตับ ( Liver )', result: true },
                { title: 'ต่อมไทมัส ( Thymus Gland )', result: false },
                { title: ' ต่อมน้ำเหลือง  ( Lymph nodes )', result: false },
            ],
            seleted: -1
        },
        {
            title: 'ลักษณะของภูมิคุ้มกันที่ก่อเองเป็นดังข้อใด',
            answer: [
                { title: 'ร่างกายสร้างขึ้นมาเอง เกิดอย่างรวดเร็ว และปรากฏผลในระยะสั้น', result: false },
                { title: 'ร่างกายไม่ได้สร้างขึ้นมาเอง แต่เห็นผลทันที อายุการทำงานาน', result: false },
                { title: 'ร่างกายไม่ได้สร้างขึ้นมาเอง เกิดผลช้า แต่อายุสั้น', result: false },
                { title: 'ร่างกายสร้างขึ้นมาเอง เกิดช้า แต่ผลของการทำงานยาวนาน', result: true },
            ],
            seleted: -1
        },
        {
            title: 'เม็ดเลือดขาวในข้อใดเกี่ยวข้องกับการสร้าง Antibody',
            answer: [
                { title: 'Neutrophil', result: false },
                { title: 'Monoclyte', result: false },
                { title: 'Lymphocyte', result: true },
                { title: 'Basophil', result: false },
            ],
            seleted: -1
        },
        {
            title: 'ข้อใดกล่าวถูกต้อง',
            answer: [
                { title: 'เชื้อเอดส์เกิดจากไวรัส จึงไม่สามารถผลิตวัคซีนป้องกันได้', result: true },
                { title: 'วัคซีน และ เซรุ่ม ที่ผลิตจากเชื้อโรคเดียวกันต้องใช้คู่กัน', result: false },
                { title: 'วัคซีนให้ผลต่อร่างกายน้อยกว่าเซรุ่ม แต่ภูมิคุ้มกันของโรคได้นานกว่าเซรุ่ม', result: false },
                { title: 'วัคซีนและเซรุ่มมีกรรมวิธีผลิตเหมือนกันแต่มีปฏิกิริยาในร่างกายที่ต่างกัน', result: false },
            ],
            seleted: -1
        },
        {
            title: 'นักเรียนคนหนึ่งถูกตะปูตำ ทำให้เกิดโรคบาดทะยัก อาการน่าวิตกกังวล นักเรียนควรได้รับการรักษาโดยการให้สารใด',
            answer: [
                { title: 'วัคซีน', result: false },
                { title: 'เซรุ่ม', result: false },
                { title: 'ทอกซอยด์', result: true },
                { title: 'แอนติเจน', result: false },
            ],
            seleted: -1
        },
        {
            title: 'การให้ทารกดื่มนมของมารดา ทารกได้รับภูมิคุ้มกันชนิดใด',
            answer: [
                { title: 'ภูมิคุ้มกันก่อเอง ', result: false },
                { title: 'ภูมิคุ้มกันที่รับมา', result: true },
                { title: 'มิคุ้มกันที่ก่อเองและรับมา', result: false },
                { title: 'ไม่ได้รับภูมิคุ้มกัน', result: false },
            ],
            seleted: -1
        },
        {
            title: 'สารแอนติบอดี ซึ่งสร้างโดยเม็ดเลือดขาวจะมีการลำเลียงไปในร่างกายโดย',
            answer: [
                { title: 'ระบบหมุนเวียนเลือด', result: true },
                { title: 'ระบบหมุนเวียนน้ำเหลือง', result: false },
                { title: 'ซึมผ่านทางเนื้อเยื่อ', result: false },
                { title: 'ซึมผ่านไปกับของเหลวระหว่างเซลล์', result: false },
            ],
            seleted: -1
        },
        {
            title: 'ภูมิคุ้มกันก่อเอง  (Active  Immunity)   จะถูกสร้างขึ้นจาก',
            answer: [
                { title: 'มนุษย์ด้วยกัน', result: false },
                { title: ' สัตว์ทดลองบางชนิด', result: false },
                { title: ' เซลล์ของคนใดคนหนึ่ง', result: false },
                { title: 'การเคยเป็นโรคชนิดนั้นมาก่อน', result: true },
            ],
            seleted: -1
        },
        {
            title: 'สารใดต่อไปนี้จะถูกใช้บ่อย ๆ ในการให้ภูมิคุ้มกันแบบ  Passive  Immunity',
            answer: [
                { title: 'Serum', result: true },
                { title: 'Vaccine', result: false },
                { title: 'Toxoid', result: false },
                { title: 'Antitoixtn', result: false },
            ],
            seleted: -1
        },
        {
            title: 'สารในข้อใดต่อไปนี้มีคุณสมบัติเป็นแอนติเจน   (Antigen ) ',
            answer: [
                { title: 'วัคซีน', result: false },
                { title: 'ทอกซิน', result: false },
                { title: 'ทอกซอยด์', result: false },
                { title: 'ถูกหมดทุกข้อ', result: true },
            ],
            seleted: -1
        },
    ]
};