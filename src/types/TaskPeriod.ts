//预定义周期
enum PredefinedPeriod{
    everyDay="every-day",
    workday="workday",
    weekend='weekend',
    everyWeek="every-week",
    everyMonth="every-month",
    everyYear="every-year",
}
//自定义周期
//周期单位
enum CurrentPeriodUnit{
    day="day",
    week="week",
    month="month",
    year="year",
}
class CurrentPeriod{

    figure:number;
    unit:CurrentPeriodUnit;

    constructor(figure:number, unit:CurrentPeriodUnit){
        this.figure = figure;
        this.unit = unit;
    }

}
class TaskPeriod{

    period:PredefinedPeriod|CurrentPeriod;

    constructor(period:PredefinedPeriod|CurrentPeriod){
        this.period = period;
    }

    CalculateDateAfterPeriod(date:Date):Date{
        //todo:finish
        return date;
    }
}

export {PredefinedPeriod,CurrentPeriodUnit,CurrentPeriod,TaskPeriod};
