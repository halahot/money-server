import { Markup } from "telegraf";

export function actionButtons () {
    return Markup.keyboard(
        [
            Markup.button.callback('➕ Доходы', 'income'),
            Markup.button.callback('➖ Расходы', 'expenses')
        ], {
            columns: 2
        })
}