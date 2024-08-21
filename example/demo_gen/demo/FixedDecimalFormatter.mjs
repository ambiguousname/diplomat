import { DataProvider } from "./js/index.mjs"
import { FixedDecimal } from "./js/index.mjs"
import { FixedDecimalFormatter } from "./js/index.mjs"
import { FixedDecimalFormatterOptions } from "./js/index.mjs"
import { Locale } from "./js/index.mjs"
export function formatWrite() {
    var terminusArgs = arguments;
    return (function (...args) { return args[0].formatWrite(...args.slice(1)) }).apply(
        null,
        [
            FixedDecimalFormatter.tryNew.apply(
                null,
                [
                    Locale.new_.apply(
                        null,
                        [
                            terminusArgs[0]
                        ]
                    ),
                    DataProvider.newStatic.apply(
                        null,
                        [
                        ]
                    ),
                    (function (...args) {
                        return new FixedDecimalFormatterOptions(...args);
                    }).apply(
                        null,
                        [
                            terminusArgs[1],
                            terminusArgs[2]
                        ]
                    )
                ]
            ),
            FixedDecimal.new_.apply(
                null,
                [
                    terminusArgs[3]
                ]
            )
        ]
    );
}
