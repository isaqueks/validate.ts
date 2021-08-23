import RegexValidation from "../regexValidation";

export type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY'

export default class DateValidation extends RegexValidation {

    private _format: DateFormat;
    public get format() {
        return this._format;
    }

    constructor(format: DateFormat) {
        super(/^\d{8}$/, '**/**/****');
        this._format = format;
    }

    private validateParts(part1: string, part2: string): boolean {
        if (this._format === 'DD/MM/YYYY') {
            return Number(part1) <= 31 && Number(part2) <= 12;
        }
        else {
            return Number(part2) <= 31 && Number(part1) <= 12;
        }
    }

    public override validateMasked(input: string): boolean {
        if (!this.isMasked(input)) {
            return false;
        }

        const clean = this.cleanMaskUnsafe(input);
        return this.validateUnmasked(clean);
        // if (!this.validationRule.test(input)) {
        //     return false;
        // }
        // const [ part1, part2, yyyy ] = input.split('/');
        // return this.validateParts(part1, part2);
    }

    public override validateUnmasked(input: string): boolean {
        if (this.isMasked(input)) {
            return false;
        }

        if (!this.validationRule.test(input)) {
            return false;
        }

        const part1 = input.substring(0, 2);
        const part2 = input.substring(2, 4);

        return this.validateParts(part1, part2);
    }

}