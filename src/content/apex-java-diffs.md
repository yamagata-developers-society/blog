---
layout: post
title: "Hello Apex"
author: 'Takahiro Sato'
tags: ['advent2019','meetup']
image: 'img/posts/apex-java-diffs/Salesforce_Logo_Web_2019.png'
date: '2019-12-03T12:00:00.000Z'
draft: false
---
この記事は、 [Yamagata Developers Society Advent Calendar 2019](https://adventar.org/calendars/4619) 3日目の記事です。

3日目から空気を読まずにプログラムの記事を書きますTakahiroです。
最近は、今まで全く知らなかったSalesforce関係の知識を得たり勉強したり、日々精進しております。
さてさて、SalesforceというクラウドベースのCustomer Relationship Management(CRM)ですが、Apexというプログラム言語を用いてカスタマイズすることができます。(※プログラムを書かなくてもカスタマイズはできます)
ApexはJavaと似ていることから、公式でも[Apex クラスと Java クラスの違い](https://developer.salesforce.com/docs/atlas.ja-jp.apexcode.meta/apexcode/apex_classes_java_diffs.htm)と開発ガイドがあります。

そんな訳で、今日は私のJavaよりの脳の勉強も兼ねて、Apexを書いてみて「ほぉ」ってなった点をお伝えしたいと思います。

## 「ほぉ」となった点

### 継承元のクラスは必ず「virtual」を付けないと継承できない

Javaの感覚でこのように書くとエラーになります。

```
public class BaseClass {
    public BaseClass() {

    }
}

public class SampleClass extends BaseClass {
    public SampleClass() {

    }
}
```

Errorがでないようにするには、継承元クラスに「virtual」をつけないといけないです。

```
public virtual class BaseClass {
    public BaseClass() {

    }
}

public class SampleClass extends BaseClass {
    public SampleClass() {

    }
}
```

また、抽象クラスの場合は、いつも通りの感じで書けました。

```
public abstract class AbstractClass {
    public AbstractClass() {

    }
}

public class SampleClass extends AbstractClass {
    public SampleClass() {

    }
}
```

virtualをつけたクラスは、抽象クラスではないので、インスタンスが作れます。
むやみに意図としない派生クラスを作らせないルールが基本の様ですね。

### 継承元クラスのメソッドが「virtual」でないと、継承先クラスのメソッドでoverrideできない

継承元のメソッドにvirtualがついていなく。継承先のメソッドが同名の場合、エラーになります。

```
public virtual class BaseClass {
	public void doSomething() {

	}

	public void doSomething2() {

	}
}

public class SampleClass extends BaseClass {
	public void doSomething() { // Error

	}

	public override void doSomething2() {  // これもError

	}
}
```

以下のように継承元のメソッドにvirtualをつけるとoverrideできるようになります。

```
public virtual class BaseClass {
	public virtual void doSomething() {

	}
}

public class SampleClass extends BaseClass {
	public override void doSomething() {

	}
}
```

ちなみに、abstractはいつもの動きです。

```
public abstract class AbstractClass {
    public AbstractClass() {

    }

	public abstract void doSomething();
}

public class SampleClass extends AbstractClass {
    public SampleClass() {

    }

	public override void doSomething() {

	}
}
```

クラス同様、意図しないoverrideを防ぐルールになっている様です。

### 内部クラスにはstaticは付けられないがstaticのような動き

内部クラスには、staticを付けなくても参照可能で、newできました。便利。

```
public class SampleClass {
    public class InnerClass {
        
    }
}

SampleClass.InnerClass innerClass = new SampleClass.InnerClass();
```

また、内部クラスのstaticのクラス変数やメソッドは作れません。

```
public class SampleClass {
    public class InnerClass {
		public static Sting sample; // Error

		public static void doSomething() { // Error

		}
    }
}
```

以下のように内部クラスの中に内部クラスは作れません。（正直あんまり見たことない...)

```
public class SampleClass {
    public class InnerClass {
		public class InnerClass2 { // Error
			
		}
    }
}
```

### プロパティがありget/setのアクセサーがある

C#にあるようなプロパティが使えます。

```
public class SampleClass {
    public String name {get; set;}
}

SampleClass sampleClass = new SampleClass();
sampleClass.name = 'sample';
```

また、get/setのアクセサーにはアクセス修飾子をつけることができ、
クラス変数と同じようにprivateにより外からの書き込みを制御できます。

```
public class SampleClass {
    public String name {get; private set;}
}

SampleClass sampleClass = new SampleClass();
sampleClass.name = 'sample'; // Error
```

試しに、よくある形としてJson→オブジェクトをしてみました。

```
public class SampleClass {
    public String name {get; private set;}
}

System.debug(Json.deserialize('{"name" : "sample"}', SampleClass.class));

// Log => SampleClass:[name=sample]
```

Json#deserializeはnameがprivateで定義されてても、値をセットしてくれるのですね。ほぉ。

### ここまでの知識でよくあるものを作る

例えば、何度も呼び出されるものをシングルトンでもっておき、あるタイミングでリフレッシュされるものをApexで書くとこんな感じになると思われます。

```
public class SampleClass {
    public static InnerClass innerClass;
    private static final Integer EXPIRED_MINUTES = 5;

	private SampleClass() {}

    public static InnerClass getInstance() {
        if (innerClass == null || innerClass.isExpired()) {
            innerClass = new InnerClass(Datetime.now().addMinutes(EXPIRED_MINUTES));
        }

        return innerClass;
    }

    public class InnerClass {
        public Datetime expiredTime {get; private set;} 

        private InnerClass(Datetime expiredTime) {
            this.expiredTime = expiredTime;
        }

		public Boolean isExpired() {
			return expiredTime.getTime() < Datetime.now().getTime();
		}
    }
}
```

## 最後に

みなさまApexの勉強にお付き合いいただきありがとうございます。
ほぼJavaっぽいけどJavaではない感じは伝わってきますね。
私が大きく違うなと思った点は、Javaでは開発者が他の開発者が意図としない作りをしないように、
自由にプログラムを書ける範囲を狭める制御をするのに対し、あらかじめSalesforceのApexでは
意図としないプログラムを生み出させないルールが基本となっていると感じます。

まだまだ分からないことだらけなので、勉強しなきゃ〜、、、